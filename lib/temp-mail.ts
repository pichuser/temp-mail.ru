import  * as request from 'superagent';
import * as md5 from 'js-md5';
import {
    Observable,
    of,
} from 'rxjs';
import * as uuid from 'uuid';
import { MailObject } from './mailObject.model';
import {
    delay,
    first,
} from 'rxjs/internal/operators';

const API_KEY = 'f1a7767544msh2124d821d2582fep1cb46ejsnccce8ac8dd2c';

/** @module pichuser */
/**
 * @alias module:pichuser~TempMail
 */
export default class TempMailWrapper {

    private static _apiUrl = 'https://privatix-temp-mail-v1.p.rapidapi.com';

    private static getUrl(suburl) {
        return `${this._apiUrl}${suburl}`;
    }

    private static requestCustom(url): request.SuperAgentRequest {
        return request.get(TempMailWrapper.getUrl(url))
            .set('X-RapidAPI-Key', API_KEY);
    };

    /**
     Get all available domains
     @returns {Observable<Array<string>>}
     @example

     ```js
     TempMail.domains().subscribe((domains) => {
            console.log(domains);
        });
```
     */
    public static domains(): Observable<Array<string>> {
        return new Observable<Array<string>>((observable) => {
            this.requestCustom('/request/domains/')
                .end((err, res) => {
                    if (err) {
                        observable.error(err);
                    } else {
                        observable.next(res.body);
                    }
                    observable.complete();
                });
        });
    }

    /**
     Get all emails by mail name
     @param mailName {string} - email on temp-mail.ru
     @returns {Observable<Array<MailObject>>}
     @example

     ```js
     TempMail.mails('test@tempmail.domain')
        .subscribe((mails) => {
            console.log(mails);
        });
```
     */
    public static mails(mailName: string): Observable<Array<MailObject>> {
        return new Observable<Array<any>>((observable) => {
            let hash = md5(mailName);
            this.requestCustom(`/request/mail/id/${hash}/`)
                .end((err, res) => {
                    if (err) {
                        observable.error(err);
                    } else {
                        observable.next(res.body);
                    }
                    observable.complete();
                });
        });
    }

    /**
     * Return count of mails in box
     * @param mailName {string} - email on temp-mail.ru
     * @returns {Observable<number>}
     * @example

     ```js
     TempMail.mails('test@tempmail.domain')
     .subscribe((count) => {
        console.log(count);
    });
```

     */
    public static mailsCount(mailName: string) {
        return new Observable<number>((observable) => {
            this.mails(mailName)
                .subscribe({
                    next: (res) => {
                        observable.next(res.length || 0);
                    },
                    error: (err) => observable.error(err),
                    complete: () => observable.complete(),
                });
        });
    }

    /**
     * Return first random email without inbox letters
     * @returns {Observable<string>}
     * @example

     ```js
     TempMail.randomFreeEmail().subscribe((mailName) => {
        console.log(mailName);
    });
```

     */
    public static randomFreeEmail(): Observable<string> {
        return new Observable<string>((observable) => {
            this.domains().subscribe((domains) => {
                const getM = () => {
                    let mailName = uuid.v4() + domains[0];
                    this.mailsCount(mailName)
                        .subscribe((resp) => {
                            if (resp === 0) {
                                observable.next(mailName);
                                observable.complete();
                            } else {
                                getM();
                            }
                        })
                };

                getM();
            })
        });
    }

    /**
     * Delete email by id
     * @param id {string} - system hash of mail.
     * @returns {Observable<boolean>}
     * @example

     ```js
     TempMail.deleteMail('hashid').subscribe((success) => {
        console.log(success ? "deleted" : "can\'t delete");
    });
```

     */
    public static deleteMail(id: string): Observable<boolean> {
        return new Observable<boolean>((observable) => {
            this.requestCustom(`/request/delete/id/${id}/`)
                .end((err, res) => {
                    if (res.status !== 200) {
                        observable.next(false);
                    } else {
                        observable.next(true);
                    }
                    observable.complete();
                });
        });
    }

    /**
     * Return first available letter
     * @param mailName {string} - email on temp-mail.ru
     * @param timeout {number?} - timeout in seconds
     * @returns {Observable<MailObject>}
     * @example

     ```js
     TempMail.waitForMail('test@tempmail.domain', 10)
     .subscribe((mail) => {
        console.log(mail);
    }, (error) => {
        alert("Mailbox still empty")
    });
```

     */
    public static waitForMail(mailName: string, timeout: number = null): Observable<MailObject> {
        return new Observable<MailObject>((observable) => {
            let isTimeout = false;
            if (timeout) {
                setTimeout(() => {
                    observable.error('Timeout');
                    observable.complete();
                    isTimeout = true;
                }, timeout * 1000);
            }
            const getM = async () => {
                while (!isTimeout) {
                    let count = await this.mailsCount(mailName).pipe(first()).toPromise();
                    if (count > 0) {
                        await this.sleep(1);
                        let mails = await this.mails(mailName).pipe(first()).toPromise();
                        observable.next(mails[0]);
                        observable.complete();
                        return;
                    }
                    await this.sleep(1);
                }
            };
            getM();
        });
    }

    private static sleep(seconds) {
        return of(null).pipe(delay(1000)).toPromise();
    }

}