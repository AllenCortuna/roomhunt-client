import React from "react";
import Back from "./btn/Back";
const Terms = () => {
  return (
    <div className="grid max-w-[34rem] mx-auto mt-14">
      <h4 className="text-xl font-[700] mx-auto text-zinc-700">Terms and Condition</h4>
      <ol className="text-sm font-[500] text-zinc-500 flex flex-col gap-2 p-4">
        <Li
          heading={"Accommodators must be 18 years old or above."}
          text={
            "Accommodators are individuals or organizations that provide accommodation, or a place to stay, for travelers or visitors. This statement means that in order to be an accommodator, an individual must be at least 18 years old. This age requirement may be in place for various reasons, such as legal liability or the assumption that individuals who are 18 or older are more responsible and able to handle the duties and responsibilities that come with being an accommodator."
          }
        />
        <Li
          heading={"Room seekers must be verified to send a review."}
          text={
            "In order to leave a review on this platform, room seekers must be verified. Verification is a process of confirming the identity or authenticity of something. In this case, it means that the platform is checking to make sure that the person leaving the review is a real individual who actually stayed at the accommodation in question. This requirement helps to ensure the integrity of the review system and prevent fake or fraudulent reviews from being posted. Verification may involve requiring room seekers to provide certain information or documentation to confirm their identity or their stay at the accommodation."
          }
        />
        <Li
          heading={"Room seekers must be verified to send message."}
          text={
            "This requirement may help to ensure the security and privacy of the platform and prevent spam or fraudulent activity. Verification may involve requiring room seekers to provide certain information or documentation to confirm their identity. This requirement may be in place to help ensure that the platform is used for its intended purpose and that communication between room seekers and accommodators is legitimate and respectful. It may also help to build trust and confidence between the two parties."
          }
        />
        <Li
          heading={"Accommodators must be verified to upload rooms."}
          text={
            "This requirement may help to ensure the quality and reliability of the rooms and accommodations available on the platform, and prevent fake or fraudulent listings from being posted. Verification may involve requiring accommodators to provide certain information or documentation to confirm their identity and their status as an accommodator. This requirement may be in place to help protect the interests of both room seekers and accommodators, and to maintain the integrity and trustworthiness of the platform."
          }
        />
        <Li
          heading={"We do not cover transactions and payment."}
          text={
            "This statement means that the organization or platform in question is not responsible for handling or facilitating transactions or payments between room seekers and accommodators. It is the responsibility of the room seekers and accommodators to arrange and complete any transactions or payments that are necessary in connection with the accommodation. By stating that it does not cover transactions and payment, the organization or platform is indicating that it is not involved in these aspects of the accommodation process and that it is up to the room seekers and accommodators to handle these matters on their own. This may include making arrangements for payment methods, completing financial transactions, and ensuring that payment is made in a timely and satisfactory manner."
          }
        />

        <Li
          heading={"We will not share the collected data."}
          text={
            "In the context of an accommodation platform, collected data may include information about the rooms that are available for rent or booking, as well as information about the individuals or organizations offering the rooms (accommodators) and the individuals or organizations seeking accommodation (room seekers). This data may include details such as the location, size, and amenities of the rooms, as well as contact information and other personal details about the accommodators and room seekers.By stating that it will not share this data, the organization or platform is committing to protecting the privacy and confidentiality of the individuals and organizations involved in the accommodation process. This may help to build trust and confidence in the platform, and ensure that the data is used only for the purposes for which it was collected."
          }
        />
        <Li
          heading={
            "We are not responsible for what the seekers and accommodators activity outside this platform."
          }
          text={
            "This statement means that the organization or platform in question is not responsible for the actions or activities of room seekers or accommodators that occur outside of the platform. It is limited to the activities and interactions that take place within the platform and has no control or responsibility for what happens outside of it. In the context of an accommodation platform, room seekers and accommodators may interact with each other and make arrangements for accommodation through the platform, but they may also have other interactions or activities that are not related to the platform or that take place outside of it. These activities could include things like communication or transactions that occur outside of the platform, or events or situations that are unrelated to the accommodation process. By stating that it is not responsible for these activities, the organization or platform is making it clear that it has no control over or liability for what happens outside of the platform, and that room seekers and accommodators are solely responsible for their own actions and interactions."
          }
        />
      </ol>
      <Back />
    </div>
  );
};

const Li = ({ text, heading }) => {
  return (
    <li className="mb-5">
      <h4 className="text-md font-semibold text-zinc-600">{heading}</h4>
      <p className="text-xs rale ml-4">{text}</p>
    </li>
  );
};

export default Terms;
