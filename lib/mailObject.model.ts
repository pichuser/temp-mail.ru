/**
 * @module pichuser
 */

/**
 * @class MailObject
 * */
export class MailObject {

    /**
     * Уникальный идентификатор письма, присвоенный системой
     * @fieldOf pichuser.MailObject
     */
    mail_unique_id: string = "";

    /**
     * Уникальный идентификатор письма в md5 хеше, присвоенный системой
     */
    mail_id: string = "";

    /**
     * md5 хеш почтового адреса
     */
    mail_address_id: string = "";

    /**
     * Отправитель
     */
    mail_from: string = "";

    /**
     * Тема
     */
    mail_subject: string = "";

    /**
     * Предпросмотр сообщения
     */
    mail_preview: string = "";

    /**
     * Cообщение в текстовом или в html формате (основной)
     */
    mail_text_only: string = "";

    /**
     * Cообщение только в текстовом формате
     */
    mail_text: string = "";

    /**
     * mail HTML
     */
    mail_html: string = "";
}