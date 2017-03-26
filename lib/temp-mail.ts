import  * as request from 'superagent';
import * as md5 from 'js-md5';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { MailObject } from './mailObject.model';

/** @module pichuser */
/** Class representing wrapper. */
export default class TempMailWrapper {

    private static _apiUrl = 'http://api.temp-mail.ru';
    private static _format = '/format/json';
    private static getUrl(suburl){
        return `${this._apiUrl}${suburl}${this._format}`;
    }

    /**
        Get all available domains
        @return {Observable<Array<string>>}
     */
    public static domains(): Observable<Array<string>> {
        return new Observable<Array<string>> ((observable) => {
            request.get(this.getUrl('/request/domains'))
                .set('Accept', 'application/json')
                .end((err, res) => {
                    observable.next(res.body);
                    observable.complete();
                });
        });
    }

    /**
     * Get all emails by mail name
     * @param mailName
     * @return {Observable<Array<module:pichuser~MailObject>>}
     */
    public static mails(mailName: string): Observable<Array<MailObject>> {
        return new Observable<Array<any>> ((observable) => {
            let hash = md5(mailName);
            request.get(this.getUrl(`/request/source/id/${hash}`))
                .set('Accept', 'application/json')
                .end((err, res) => {
                    observable.next(res.body);
                    observable.complete();
                });
        });
    }

    /**
     * Return count of mails in box
     * @param mailName
     * @return {Observable<number>}
     */
    public static mailsCount(mailName: string) {
        return new Observable<number>((observable) => {
            this.mails(mailName)
                .subscribe((res) => {
                    observable.next(res.length || -1);
                    observable.complete();
                });
        });
    }

    /**
     * Get free email
     * @return {Observable<string>}
     */
    public static randomFreeEmail(): Observable<string> {
        return new Observable<string>((observable) => {
            this.domains().subscribe((domains) => {
                let self = this;
                function getM() {
                    let mailName = uuid.v4() + domains[0];
                    self.mailsCount(mailName)
                        .subscribe((resp) => {
                            if(resp === 0){
                                observable.next(mailName);
                                observable.complete()
                            }else{
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
     * @param id
     * @return {Observable<boolean>}
     */
    public static deleteMail(id: string): Observable<boolean> {
        return new Observable<boolean> ((observable) => {
            request.get(this.getUrl(`/request/delete/id/${id}`))
                .set('Accept', 'application/json')
                .end((err, res) => {
                    if(res.status !== 200){
                        observable.next(false);
                    }else{
                        observable.next(true);
                    }
                    observable.complete();
                });
        });
    }

    /**
     * Return first available letter
     * @param mailName
     * @param timeout
     * @return {Observable<module:pichuser~MailObject>}
     */
    public static waitForMail(mailName: string, timeout: number = null): Observable<MailObject> {
        return new Observable<MailObject> ((observable) => {
            let self = this;
            let isTimeout = false;
            if(timeout){
                setTimeout(() => {
                    observable.error('Timeout');
                    observable.complete();
                    isTimeout = true;
                }, timeout * 1000);
            }
            async function getM() {
                while(!isTimeout){
                    let count = await self.mailsCount(mailName).first().toPromise();
                    if(count > 0){
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

    private static sleep(seconds){
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, seconds * 1000);
        });
    }

}