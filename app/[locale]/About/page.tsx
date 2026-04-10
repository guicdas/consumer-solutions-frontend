import dynamic from "next/dynamic";
import Founder from "./Founder";

const Faqs = dynamic(() => import("./Faqs"));

export default function AboutUs() {

	return (
		<>
			<Founder />
			<Faqs />
		</>
	);
}