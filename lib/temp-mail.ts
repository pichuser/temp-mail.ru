import  * as request from 'superagent';
import * as md5 from 'js-md5';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { IMailObject } from './mailObject.interface';

export class TempMailWrapper {

    private _apiUrl = 'http://api.temp-mail.ru';
    private _format = '/format/json';
    private getUrl(suburl){
        return `${this._apiUrl}${suburl}${this._format}`;
    }

    public domains(): Observable<Array<string>> {
        return new Observable<Array<string>> ((observable) => {
            request.get(this.getUrl('/request/domains'))
                .set('Accept', 'application/json')
                .end((err, res) => {
                    observable.next(res.body);
                    observable.complete();
                });
        });
    }

    public mails(mailName: string): Observable<Array<IMailObject>> {
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

    public mailsCount(mailName: string) {
        return new Observable<number>((observable) => {
            this.mails(mailName)
                .subscribe((res) => {
                    observable.next(res.length || -1);
                    observable.complete();
                });
        });
    }

    public randomFreeEmail(): Observable<string> {
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

    public deleteMail(id): Observable<boolean> {
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

    public waitForMail(mailName): Observable<IMailObject> {
        return new Observable<IMailObject> ((observable) => {
            let self = this;
            async function getM() {
                while(true){
                    let count = await self.mailsCount(mailName).first().toPromise();
                    if(count > 0){
                        await self.sleep(1);
                        let mails = await self.mails(mailName).first().toPromise();
                        console.log(mails);
                        observable.next(mails[0]);
                        observable.complete();
                        return;
                    }
                    console.log('no letter');
                    await self.sleep(1);
                }
            }
            getM();
        });
    }

    private sleep(seconds){
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, seconds * 1000);
        });
    }

}