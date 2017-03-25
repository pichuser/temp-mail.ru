
# temp-mail.ru
Node.js wrapper for temp-mail.ru api.

## Install

```sh
$ npm install temp-mail.ru --save
```

# API Reference
    
* [pichuser](#module_pichuser)
    * [~TempMailWrapper](#module_pichuser..TempMailWrapper)
        * [.domains()](#module_pichuser..TempMailWrapper.domains) ⇒ <code>Observable.&lt;Array.&lt;string&gt;&gt;</code>
        * [.mails(mailName)](#module_pichuser..TempMailWrapper.mails) ⇒ <code>Observable.&lt;Array.&lt;module:pichuser~MailObject&gt;&gt;</code>
        * [.mailsCount(mailName)](#module_pichuser..TempMailWrapper.mailsCount) ⇒ <code>Observable.&lt;number&gt;</code>
        * [.randomFreeEmail()](#module_pichuser..TempMailWrapper.randomFreeEmail) ⇒ <code>Observable.&lt;string&gt;</code>
        * [.deleteMail(id)](#module_pichuser..TempMailWrapper.deleteMail) ⇒ <code>Observable.&lt;boolean&gt;</code>
        * [.waitForMail(mailName, timeout)](#module_pichuser..TempMailWrapper.waitForMail) ⇒ <code>[Observable.&lt;MailObject&gt;](#module_pichuser..MailObject)</code>
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

<a name="module_pichuser..TempMailWrapper"></a>

### pichuser~TempMailWrapper
Class representing wrapper.

**Kind**: inner class of <code>[pichuser](#module_pichuser)</code>  

* [~TempMailWrapper](#module_pichuser..TempMailWrapper)
    * [.domains()](#module_pichuser..TempMailWrapper.domains) ⇒ <code>Observable.&lt;Array.&lt;string&gt;&gt;</code>
    * [.mails(mailName)](#module_pichuser..TempMailWrapper.mails) ⇒ <code>Observable.&lt;Array.&lt;module:pichuser~MailObject&gt;&gt;</code>
    * [.mailsCount(mailName)](#module_pichuser..TempMailWrapper.mailsCount) ⇒ <code>Observable.&lt;number&gt;</code>
    * [.randomFreeEmail()](#module_pichuser..TempMailWrapper.randomFreeEmail) ⇒ <code>Observable.&lt;string&gt;</code>
    * [.deleteMail(id)](#module_pichuser..TempMailWrapper.deleteMail) ⇒ <code>Observable.&lt;boolean&gt;</code>
    * [.waitForMail(mailName, timeout)](#module_pichuser..TempMailWrapper.waitForMail) ⇒ <code>[Observable.&lt;MailObject&gt;](#module_pichuser..MailObject)</code>

<a name="module_pichuser..TempMailWrapper.domains"></a>

#### TempMailWrapper.domains() ⇒ <code>Observable.&lt;Array.&lt;string&gt;&gt;</code>
Get all available domains

**Kind**: static method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  
<a name="module_pichuser..TempMailWrapper.mails"></a>

#### TempMailWrapper.mails(mailName) ⇒ <code>Observable.&lt;Array.&lt;module:pichuser~MailObject&gt;&gt;</code>
Get all emails by mail name

**Kind**: static method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  

| Param |
| --- |
| mailName | 

<a name="module_pichuser..TempMailWrapper.mailsCount"></a>

#### TempMailWrapper.mailsCount(mailName) ⇒ <code>Observable.&lt;number&gt;</code>
Return count of mails in box

**Kind**: static method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  

| Param |
| --- |
| mailName | 

<a name="module_pichuser..TempMailWrapper.randomFreeEmail"></a>

#### TempMailWrapper.randomFreeEmail() ⇒ <code>Observable.&lt;string&gt;</code>
Get free email

**Kind**: static method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  
<a name="module_pichuser..TempMailWrapper.deleteMail"></a>

#### TempMailWrapper.deleteMail(id) ⇒ <code>Observable.&lt;boolean&gt;</code>
Delete email by id

**Kind**: static method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  

| Param |
| --- |
| id | 

<a name="module_pichuser..TempMailWrapper.waitForMail"></a>

#### TempMailWrapper.waitForMail(mailName, timeout) ⇒ <code>[Observable.&lt;MailObject&gt;](#module_pichuser..MailObject)</code>
Return first available letter

**Kind**: static method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  

| Param | Default |
| --- | --- |
| mailName |  | 
| timeout | <code></code> | 

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

#### mailObject.mail_unique_id
Уникальный идентификатор письма, присвоенный системой

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
**Fieldof**: pichuser.MailObject  
<a name="module_pichuser..MailObject.MailObject+mail_id"></a>

#### mailObject.mail_id
Уникальный идентификатор письма в md5 хеше, присвоенный системой

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_address_id"></a>

#### mailObject.mail_address_id
md5 хеш почтового адреса

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_from"></a>

#### mailObject.mail_from
Отправитель

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_subject"></a>

#### mailObject.mail_subject
Тема

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_preview"></a>

#### mailObject.mail_preview
Предпросмотр сообщения

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_text_only"></a>

#### mailObject.mail_text_only
Cообщение в текстовом или в html формате (основной)

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_text"></a>

#### mailObject.mail_text
Cообщение только в текстовом формате

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  
<a name="module_pichuser..MailObject.MailObject+mail_html"></a>

#### mailObject.mail_html
mail HTML

**Kind**: instance property of <code>[MailObject](#module_pichuser..MailObject)</code>  

* * *

## License

MIT