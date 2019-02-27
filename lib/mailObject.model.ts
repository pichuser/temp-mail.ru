let stub = 1;
/**
 * @module pichuser
 */

/**
 * @class MailObject
 * */
stub = 1;
export class MailObject {

    /**
     * Unique identifier assigned by the system.
     * @type {string}
     */
    public mail_unique_id: string = "";

    /**
     * Unique identifier of the message in md5 hash assigned by the system.
     */
    public mail_id: string = "";

    /**
     * md5 email address hash
     */
    public mail_address_id: string = "";

    /**
     * Sender
     */
    public mail_from: string = "";

    /**
     * Subject
     */
    public mail_subject: string = "";

    /**
     * Preview
     */
    public mail_preview: string = "";

    /**
     * Message in text or html format (main)
     */
    public mail_text_only: string = "";

    /**
     * Message only in text format
     */
    public mail_text: string = "";

    /**
     * Message only in html format
     */
    public mail_html: string = "";
}