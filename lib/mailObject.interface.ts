export interface IMailObject {
    mail_unique_id: string; //    Уникальный идентификатор письма, присвоенный системой
    mail_id: string; //    Уникальный идентификатор письма в md5 хеше, присвоенный системой
    mail_address_id: string; //    md5 хеш почтового адреса
    mail_from: string; //    Отправитель
    mail_subject: string; //    Тема
    mail_preview: string; //    Предпросмотр сообщения
    mail_text_only: string; //    Cообщение в текстовом или в html формате (основной)
    mail_text: string; //    Cообщение только в текстовом формате
    mail_html: string; //
}