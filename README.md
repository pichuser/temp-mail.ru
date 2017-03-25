
# temp-mail.ru
Node.js wrapper for temp-mail.ru api.



## Install

```sh
$ npm install temp-mail.ru --save
```

# API Reference
    
* [pichuser](#module_pichuser)
    * [~TempMailWrapper](#module_pichuser..TempMailWrapper)
        * [.domains()](#module_pichuser..TempMailWrapper+domains) ⇒ <code>Observable.&lt;Array.&lt;string&gt;&gt;</code>
        * [.mails(mailName)](#module_pichuser..TempMailWrapper+mails) ⇒ <code>Observable.&lt;Array.&lt;any&gt;&gt;</code>
        * [.mailsCount(mailName)](#module_pichuser..TempMailWrapper+mailsCount) ⇒ <code>Observable.&lt;number&gt;</code>
        * [.randomFreeEmail()](#module_pichuser..TempMailWrapper+randomFreeEmail) ⇒ <code>Observable.&lt;string&gt;</code>
        * [.deleteMail(id)](#module_pichuser..TempMailWrapper+deleteMail) ⇒ <code>Observable.&lt;boolean&gt;</code>
        * [.waitForMail(mailName)](#module_pichuser..TempMailWrapper+waitForMail) ⇒ <code>Observable.&lt;IMailObject&gt;</code>

<a name="module_pichuser..TempMailWrapper"></a>

### pichuser~TempMailWrapper
Class representing wrapper.

**Kind**: inner class of <code>[pichuser](#module_pichuser)</code>  

* [~TempMailWrapper](#module_pichuser..TempMailWrapper)
    * [.domains()](#module_pichuser..TempMailWrapper+domains) ⇒ <code>Observable.&lt;Array.&lt;string&gt;&gt;</code>
    * [.mails(mailName)](#module_pichuser..TempMailWrapper+mails) ⇒ <code>Observable.&lt;Array.&lt;any&gt;&gt;</code>
    * [.mailsCount(mailName)](#module_pichuser..TempMailWrapper+mailsCount) ⇒ <code>Observable.&lt;number&gt;</code>
    * [.randomFreeEmail()](#module_pichuser..TempMailWrapper+randomFreeEmail) ⇒ <code>Observable.&lt;string&gt;</code>
    * [.deleteMail(id)](#module_pichuser..TempMailWrapper+deleteMail) ⇒ <code>Observable.&lt;boolean&gt;</code>
    * [.waitForMail(mailName)](#module_pichuser..TempMailWrapper+waitForMail) ⇒ <code>Observable.&lt;IMailObject&gt;</code>

<a name="module_pichuser..TempMailWrapper+domains"></a>

#### tempMailWrapper.domains() ⇒ <code>Observable.&lt;Array.&lt;string&gt;&gt;</code>
Get all available domains

**Kind**: instance method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  
<a name="module_pichuser..TempMailWrapper+mails"></a>

#### tempMailWrapper.mails(mailName) ⇒ <code>Observable.&lt;Array.&lt;any&gt;&gt;</code>
Get all emails by mail name

**Kind**: instance method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  

| Param |
| --- |
| mailName | 

<a name="module_pichuser..TempMailWrapper+mailsCount"></a>

#### tempMailWrapper.mailsCount(mailName) ⇒ <code>Observable.&lt;number&gt;</code>
Return count of mails in box

**Kind**: instance method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  

| Param |
| --- |
| mailName | 

<a name="module_pichuser..TempMailWrapper+randomFreeEmail"></a>

#### tempMailWrapper.randomFreeEmail() ⇒ <code>Observable.&lt;string&gt;</code>
Get free email

**Kind**: instance method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  
<a name="module_pichuser..TempMailWrapper+deleteMail"></a>

#### tempMailWrapper.deleteMail(id) ⇒ <code>Observable.&lt;boolean&gt;</code>
Delete email by id

**Kind**: instance method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  

| Param |
| --- |
| id | 

<a name="module_pichuser..TempMailWrapper+waitForMail"></a>

#### tempMailWrapper.waitForMail(mailName) ⇒ <code>Observable.&lt;IMailObject&gt;</code>
Return first available letter

**Kind**: instance method of <code>[TempMailWrapper](#module_pichuser..TempMailWrapper)</code>  

| Param |
| --- |
| mailName | 


* * *

## License

MIT