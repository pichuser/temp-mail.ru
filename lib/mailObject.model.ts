/**
 * @module pichuser
 */

/**
 * @class MailObject
 * */
export class MailObject {

    /**
     * Unique identifier assigned by the system.
     */
    mail_unique_id: string = "";

    /**
     * Unique identifier of the message in md5 hash assigned by the system.
     */
    mail_id: string = "";

    /**
     * md5 email address hash
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