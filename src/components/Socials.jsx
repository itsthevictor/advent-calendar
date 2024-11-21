const Socials = () => {
	return (
    <div className="socials-container2">
      <h3 className="social-text">Trimite linkul unui prieten:</h3>

      <div className="social-btns">
        <FacebookShareButton url={socialURL} className="social-btn">
          <BsFacebook className="social-icon" size={25} />
        </FacebookShareButton>
        <WhatsappShareButton
          url={socialURL}
          title="Uite ce promoție are Seneca"
          className="social-btn"
        >
          <BsWhatsapp className="social-icon" size={25} />
        </WhatsappShareButton>
        <FacebookMessengerShareButton url={socialURL} className="social-btn">
          <BsMessenger className="social-icon" size={25} />
        </FacebookMessengerShareButton>
        <TelegramShareButton url={socialURL} className="social-btn">
          <BsTelegram className="social-icon" size={25} />
        </TelegramShareButton>
      </div>
    </div>
  );
}
export default Socials