function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.9065843442927!2d89.15049418580995!3d25.5906358964771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fccb9517a17859%3A0x4d38ce6232dae9fb!2sShikarpur%2CMayenpur!5e0!3m2!1sen!2sbd!4v1714562124948!5m2!1sen!2sbd"
      width={600}
      height={450}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default Map;
