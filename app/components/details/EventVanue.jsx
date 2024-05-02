import Map from "@/app/components/Map";

function EventVanue({ details, swags, location }) {
  return (
    <div className="grid grid-cols-5 gap-12 my-12">
      <div className="col-span-3">
        <div className="w-full h-full bg-[#242526] p-6 rounded-lg">
          <h2 className="font-bold text-2xl">Details</h2>
          <div className="my-2 text-[#AEAEAE] space-y-4 prose lg:prose-lg max-w-none">
            <p>{details}</p>
            <ul>
              {swags?.map((item) => (
                <li key={item}>🎉 {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg col-span-2 bg-[#242526]">
        <div className="w-full">
          <Map />
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9563.048507081372!2d89.4311410274292!3d25.90038347256725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1711180232846!5m2!1sen!2sbd"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          /> */}
        </div>
        <div className="p-4">
          <p className="text-[#9C9C9C] text-base mt-1">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default EventVanue;
