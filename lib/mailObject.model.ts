/**
 * @module pichuser
 */

/**
 * @class MailObject
 * */
export class MailObject {

    /**
     * Unique identifier assigned by the system.
     * @fieldOf pichuser.MailObject
     */
    mail_unique_id: string = "";

    /**
     * md5 email address hash
     */
    mail_id: string = "";

    /**
     * md5 хеш почтового адреса
     */
    mail_address_id: string = "";

    /**
     * Sender
     */
    mail_from: string = "";

    /**
     * Subject
     */
    mail_subject: string = "";

    /**
     * Preview
     */
    mail_preview: string = "";

    /**
     * Message in text or html format (main)
     */
    mail_text_only: string = "";

    /**
     * Message only in text format
     */
    mail_text: string = "";

    /**
     * Message only in html format
     */
    mail_html: string = "";
}