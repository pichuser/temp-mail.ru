
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
    * [~Temp](#module_pichuser..Temp)
        * [.domains()](#module_pichuser..Temp.domains) ⇒ <code>string</code>
        * [.mails(mailName)](#module_pichuser..Temp.mails) ⇒ <code>Observable.&lt;Array.&lt;module:pichuser~MailObject&gt;&gt;</code>
        * [.mailsCount(mailName)](#module_pichuser..Temp.mailsCount) ⇒ <code>Observable.&lt;number&gt;</code>
        * [.randomFreeEmail()](#module_pichuser..Temp.randomFreeEmail) ⇒ <code>Observable.&lt;string&gt;</code>
        * [.deleteMail(id)](#module_pichuser..Temp.deleteMail) ⇒ <code>Observable.&lt;boolean&gt;</code>
        * [.waitForMail(mailName, timeout)](#module_pichuser..Temp.waitForMail) ⇒ <code>[Observable.&lt;MailObject&gt;](#module_pichuser..MailObject)</code>
    * [~MailObject](#module_pichuser..MailObject)
        * [.mail_unique_id](#module_pichuser..MailObject.MailObject+mail_unique_id)
        * [.mail_id](#module_pichuser..MailObject.MailObject+mail_id)
        * [.mail_address_id](#module_pichuser..MailObject.MailObject+mail_address_id)
        * [.mail_from](#module_pichuser..MailObject.MailObject+mail_from)
        * [.mail_subject](#module_pichuser..MailObject.MailObject+mail_subject)
        * [.mail_preview](#module_pichuser..MailObject.MailObject+mail_preview)
        * [.mail_text_only](#module_pichuser..MailObject.MailObject+mail_text_only)
        * [.mail_text](#module_pichuser..MailObject.MailObject+mail_text)
        * [.mail_html](#module_pichuser..MailObject.MailObject+mail_html)

<a name="module_pichuser..Temp"></a>

### pichuser~Temp
**Kind**: inner class of <code>[pichuser](#module_pichuser)</code>  

* [~Temp](#module_pichuser..Temp)
    * [.domains()](#module_pichuser..Temp.domains) ⇒ <code>string</code>
    * [.mails(mailName)](#module_pichuser..Temp.mails) ⇒ <code>Observable.&lt;Array.&lt;module:pichuser~MailObject&gt;&gt;</code>
    * [.mailsCount(mailName)](#module_pichuser..Temp.mailsCount) ⇒ <code>Observable.&lt;number&gt;</code>
    * [.randomFreeEmail()](#module_pichuser..Temp.randomFreeEmail) ⇒ <code>Observable.&lt;string&gt;</code>
    * [.deleteMail(id)](#module_pichuser..Temp.deleteMail) ⇒ <code>Observable.&lt;boolean&gt;</code>
    * [.waitForMail(mailName, timeout)](#module_pichuser..Temp.waitForMail) ⇒ <code>[Observable.&lt;MailObject&gt;](#module_pichuser..MailObject)</code>

<a name="module_pichuser..Temp.domains"></a>

#### Temp.domains() ⇒ <code>string</code>
Get all available domains

**Kind**: static method of <code>[Temp](#module_pichuser..Temp)</code>  
**Example**  
```js
     TempMail.domains().subscribe((domains) => {
            console.log(domains);
        });
```
<a name="module_pichuser..Temp.mails"></a>

#### Temp.mails(mailName) ⇒ <code>Observable.&lt;Array.&lt;module:pichuser~MailObject&gt;&gt;</code>
Get all emails by mail name

**Kind**: static method of <code>[Temp](#module_pichuser..Temp)</code>  

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
<a name="module_pichuser..Temp.mailsCount"></a>

#### Temp.mailsCount(mailName) ⇒ <code>Observable.&lt;number&gt;</code>
Return count of mails in box

**Kind**: static method of <code>[Temp](#module_pichuser..Temp)</code>  

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
<a name="module_pichuser..Temp.randomFreeEmail"></a>

#### Temp.randomFreeEmail() ⇒ <code>Observable.&lt;string&gt;</code>
Return first random email without inbox letters

**Kind**: static method of <code>[Temp](#module_pichuser..Temp)</code>  
**Example**  
```js
     TempMail.randomFreeEmail().subscribe((mailName) => {
        console.log(mailName);
    });
```
<a name="module_pichuser..Temp.deleteMail"></a>

#### Temp.deleteMail(id) ⇒ <code>Observable.&lt;boolean&gt;</code>
Delete email by id

**Kind**: static method of <code>[Temp](#module_pichuser..Temp)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | system hash of mail. |

**Example**  
```js
     TempMail.deleteMail('hashid').subscribe((success) => {
        console.log(success ? "deleted" : "can\'t delete");
    });
```
<a name="module_pichuser..Temp.waitForMail"></a>

#### Temp.waitForMail(mailName, timeout) ⇒ <code>[Observable.&lt;MailObject&gt;](#module_pichuser..MailObject)</code>
Return first available letter

**Kind**: static method of <code>[Temp](#module_pichuser..Temp)</code>  

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
**Kind**: inner class of <code>[pichuser](#module_pichuser)</code>  

* [~MailObject](#module_pichuser..MailObject)
    * [.mail_unique_id](#module_pichuser..MailObject.MailObject+mail_unique_id)
    * [.mail_id](#module_pichuser..MailObject.MailObject+mail_id)
    * [.mail_address_id](#module_pichuser..MailObject.MailObject+mail_address_id)
    * [.mail_from](#module_pichuser..MailObject.MailObject+mail_from)
    * [.mail_subject](#module_pichuser..MailObject.MailObject+mail_subject)
    * [.mail_preview](#module_pichuser..MailObject.MailObject+mail_preview)
    * [.mail_text_only](#module_pichuser..MailObject.MailObject+mail_text_only)
    * [.mail_text](#module_pichuser..MailObject.MailObject+mail_text)
    * [.mail_html](#module_pichuser..MailObject.MailObject+mail_html)

<a name="module_pichuser..MailObject.MailObject+mail_unique_id"></a>

#### hrt.mail_unique_id
Unique identifier assigned by the system.

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
**Fieldof**: pichuser.MailObject  
<a name="module_pichuser..MailObject.MailObject+mail_id"></a>

#### hrt.mail_id
md5 email address hash

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_address_id"></a>

#### hrt.mail_address_id
md5 хеш почтового адреса

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_from"></a>

#### hrt.mail_from
Sender

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_subject"></a>

#### hrt.mail_subject
Subject

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_preview"></a>

#### hrt.mail_preview
Preview

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_text_only"></a>

#### hrt.mail_text_only
Message in text or html format (main)

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_text"></a>

#### hrt.mail_text
Message only in text format

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_html"></a>

#### hrt.mail_html
Message only in html format

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  

* * *

## License

MIT