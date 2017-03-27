import  * as request from 'superagent';
import * as md5 from 'js-md5';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { MailObject } from './mailObject.model';

/** @module pichuser */
/**
 * @alias module:pichuser~TempMail
 */
export default class TempMailWrapper {

    private static _apiUrl = 'http://api.temp-mail.ru';
    private static _format = '/format/json';

    private static getUrl(suburl) {
        return `${this._apiUrl}${suburl}${this._format}`;
    }

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
            request.get(this.getUrl('/request/domains'))
                .set('Accept', 'application/json')
                .end((err, res) => {
                    observable.next(res.body);
                    observable.complete();
                });
        });
    }

    /**
     Get all emails by mail name
     @param mailName {string} - email on temp-mail.ru
     @returns {Observable<Array<module:pichuser~MailObject>>}
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
            request.get(this.getUrl(`/request/source/id/${hash}`))
                .set('Accept', 'application/json')
                .end((err, res) => {
                    if (err) {
                        observable.next([]);
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
                .subscribe((res) => {
                    observable.next(res.length);
                    observable.complete();
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
                let self = this;

                function getM() {
                    let mailName = uuid.v4() + domains[0];
                    self.mailsCount(mailName)
                        .subscribe((resp) => {
                            console.log(resp);
                            if (resp === 0) {
                                observable.next(mailName);
                                    observable.complete()
                            } else {
                                getM();
                            }
                        })
                }

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
            request.get(this.getUrl(`/request/delete/id/${id}`))
                .set('Accept', 'application/json')
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
     * @returns {Observable<module:pichuser~MailObject>}
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
            let self = this;
            let isTimeout = false;
            if (timeout) {
                setTimeout(() => {
                    observable.error('Timeout');
                    observable.complete();
                    isTimeout = true;
                }, timeout * 1000);
            }
            async function getM() {
                while (!isTimeout) {
                    let count = await self.mailsCount(mailName).first().toPromise();
                    if (count > 0) {
                        await self.sleep(1);
                        let mails = await self.mails(mailName).first().toPromise();
                        observable.next(mails[0]);
                        observable.complete();
                        return;
                    }
                    await self.sleep(1);
                }
            }
            getM();
        });
    }

    private static sleep(seconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, seconds * 1000);
        });
    }

}