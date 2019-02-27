
# temp-mail.ru
Node.js wrapper for temp-mail.ru api.

## Install

```sh
$ npm install temp-mail.ru --save
```

## How to

TypeScript:
```ts
import TempMail from "temp-mail.ru";
TempMail.randomFreeEmail().subscribe((mailName) => {
    console.log(mailName);
});
```

JavaScript:
```js
var TempMail = require("temp-mail.ru").default;
TempMail.randomFreeEmail().subscribe(function(mailName) {
    console.log(mailName);
});
```

# API Reference
    
* [pichuser](#module_pichuser)
    * [~TempMail](#module_pichuser..TempMail)
        * [.domains()](#module_pichuser..TempMail.domains) ⇒ <code>Observable.&lt;Array.&lt;string&gt;&gt;</code>
        * [.mails(mailName)](#module_pichuser..TempMail.mails) ⇒ <code>Observable.&lt;Array.&lt;MailObject&gt;&gt;</code>
        * [.mailsCount(mailName)](#module_pichuser..TempMail.mailsCount) ⇒ <code>Observable.&lt;number&gt;</code>
        * [.randomFreeEmail()](#module_pichuser..TempMail.randomFreeEmail) ⇒ <code>Observable.&lt;string&gt;</code>
        * [.deleteMail(id)](#module_pichuser..TempMail.deleteMail) ⇒ <code>Observable.&lt;boolean&gt;</code>
        * [.waitForMail(mailName, timeout)](#module_pichuser..TempMail.waitForMail) ⇒ <code>Observable.&lt;MailObject&gt;</code>
    * [~MailObject](#module_pichuser..MailObject)
        * [.mail_unique_id](#module_pichuser..MailObject+mail_unique_id) : <code>string</code>
        * [.mail_id](#module_pichuser..MailObject+mail_id)
        * [.mail_address_id](#module_pichuser..MailObject+mail_address_id)
        * [.mail_from](#module_pichuser..MailObject+mail_from)
        * [.mail_subject](#module_pichuser..MailObject+mail_subject)
        * [.mail_preview](#module_pichuser..MailObject+mail_preview)
        * [.mail_text_only](#module_pichuser..MailObject+mail_text_only)
        * [.mail_text](#module_pichuser..MailObject+mail_text)
        * [.mail_html](#module_pichuser..MailObject+mail_html)

<a name="module_pichuser..TempMail"></a>

### pichuser~TempMail
**Kind**: inner class of [<code>pichuser</code>](#module_pichuser)  

* [~TempMail](#module_pichuser..TempMail)
    * [.domains()](#module_pichuser..TempMail.domains) ⇒ <code>Observable.&lt;Array.&lt;string&gt;&gt;</code>
    * [.mails(mailName)](#module_pichuser..TempMail.mails) ⇒ <code>Observable.&lt;Array.&lt;MailObject&gt;&gt;</code>
    * [.mailsCount(mailName)](#module_pichuser..TempMail.mailsCount) ⇒ <code>Observable.&lt;number&gt;</code>
    * [.randomFreeEmail()](#module_pichuser..TempMail.randomFreeEmail) ⇒ <code>Observable.&lt;string&gt;</code>
    * [.deleteMail(id)](#module_pichuser..TempMail.deleteMail) ⇒ <code>Observable.&lt;boolean&gt;</code>
    * [.waitForMail(mailName, timeout)](#module_pichuser..TempMail.waitForMail) ⇒ <code>Observable.&lt;MailObject&gt;</code>

<a name="module_pichuser..TempMail.domains"></a>

#### TempMail.domains() ⇒ <code>Observable.&lt;Array.&lt;string&gt;&gt;</code>
Get all available domains

**Kind**: static method of [<code>TempMail</code>](#module_pichuser..TempMail)  
**Example**  
```js
     TempMail.domains().subscribe((domains) => {
            console.log(domains);
        });
```
<a name="module_pichuser..TempMail.mails"></a>

#### TempMail.mails(mailName) ⇒ <code>Observable.&lt;Array.&lt;MailObject&gt;&gt;</code>
Get all emails by mail name

**Kind**: static method of [<code>TempMail</code>](#module_pichuser..TempMail)  

| Param | Type | Description |
| --- | --- | --- |
| mailName | <code>string</code> | email on temp-mail.ru |

**Example**  
```js
     TempMail.mails('test@tempmail.domain')
        .subscribe((mails) => {
            console.log(mails);
        });
```
<a name="module_pichuser..TempMail.mailsCount"></a>

#### TempMail.mailsCount(mailName) ⇒ <code>Observable.&lt;number&gt;</code>
Return count of mails in box

**Kind**: static method of [<code>TempMail</code>](#module_pichuser..TempMail)  

| Param | Type | Description |
| --- | --- | --- |
| mailName | <code>string</code> | email on temp-mail.ru |

**Example**  
```js
     TempMail.mails('test@tempmail.domain')
     .subscribe((count) => {
        console.log(count);
    });
```
<a name="module_pichuser..TempMail.randomFreeEmail"></a>

#### TempMail.randomFreeEmail() ⇒ <code>Observable.&lt;string&gt;</code>
Return first random email without inbox letters

**Kind**: static method of [<code>TempMail</code>](#module_pichuser..TempMail)  
**Example**  
```js
     TempMail.randomFreeEmail().subscribe((mailName) => {
        console.log(mailName);
    });
```
<a name="module_pichuser..TempMail.deleteMail"></a>

#### TempMail.deleteMail(id) ⇒ <code>Observable.&lt;boolean&gt;</code>
Delete email by id

**Kind**: static method of [<code>TempMail</code>](#module_pichuser..TempMail)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | system hash of mail. |

**Example**  
```js
     TempMail.deleteMail('hashid').subscribe((success) => {
        console.log(success ? "deleted" : "can\'t delete");
    });
```
<a name="module_pichuser..TempMail.waitForMail"></a>

#### TempMail.waitForMail(mailName, timeout) ⇒ <code>Observable.&lt;MailObject&gt;</code>
Return first available letter

**Kind**: static method of [<code>TempMail</code>](#module_pichuser..TempMail)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| mailName | <code>string</code> |  | email on temp-mail.ru |
| timeout | <code>number</code> | <code></code> | timeout in seconds |

**Example**  
```js
     TempMail.waitForMail('test@tempmail.domain', 10)
     .subscribe((mail) => {
        console.log(mail);
    }, (error) => {
        alert("Mailbox still empty")
    });
```
<a name="module_pichuser..MailObject"></a>

### pichuser~MailObject
**Kind**: inner class of [<code>pichuser</code>](#module_pichuser)  

* [~MailObject](#module_pichuser..MailObject)
    * [.mail_unique_id](#module_pichuser..MailObject+mail_unique_id) : <code>string</code>
    * [.mail_id](#module_pichuser..MailObject+mail_id)
    * [.mail_address_id](#module_pichuser..MailObject+mail_address_id)
    * [.mail_from](#module_pichuser..MailObject+mail_from)
    * [.mail_subject](#module_pichuser..MailObject+mail_subject)
    * [.mail_preview](#module_pichuser..MailObject+mail_preview)
    * [.mail_text_only](#module_pichuser..MailObject+mail_text_only)
    * [.mail_text](#module_pichuser..MailObject+mail_text)
    * [.mail_html](#module_pichuser..MailObject+mail_html)

<a name="module_pichuser..MailObject+mail_unique_id"></a>

#### mailObject.mail\_unique\_id : <code>string</code>
Unique identifier assigned by the system.

**Kind**: instance property of [<code>MailObject</code>](#module_pichuser..MailObject)  
<a name="module_pichuser..MailObject+mail_id"></a>

#### mailObject.mail\_id
Unique identifier of the message in md5 hash assigned by the system.

**Kind**: instance property of [<code>MailObject</code>](#module_pichuser..MailObject)  
<a name="module_pichuser..MailObject+mail_address_id"></a>

#### mailObject.mail\_address\_id
md5 email address hash

**Kind**: instance property of [<code>MailObject</code>](#module_pichuser..MailObject)  
<a name="module_pichuser..MailObject+mail_from"></a>

#### mailObject.mail\_from
Sender

**Kind**: instance property of [<code>MailObject</code>](#module_pichuser..MailObject)  
<a name="module_pichuser..MailObject+mail_subject"></a>

#### mailObject.mail\_subject
Subject

**Kind**: instance property of [<code>MailObject</code>](#module_pichuser..MailObject)  
<a name="module_pichuser..MailObject+mail_preview"></a>

#### mailObject.mail\_preview
Preview

**Kind**: instance property of [<code>MailObject</code>](#module_pichuser..MailObject)  
<a name="module_pichuser..MailObject+mail_text_only"></a>

#### mailObject.mail\_text\_only
Message in text or html format (main)

**Kind**: instance property of [<code>MailObject</code>](#module_pichuser..MailObject)  
<a name="module_pichuser..MailObject+mail_text"></a>

#### mailObject.mail\_text
Message only in text format

**Kind**: instance property of [<code>MailObject</code>](#module_pichuser..MailObject)  
<a name="module_pichuser..MailObject+mail_html"></a>

#### mailObject.mail\_html
Message only in html format

**Kind**: instance property of [<code>MailObject</code>](#module_pichuser..MailObject)  

* * *

## License

MIT