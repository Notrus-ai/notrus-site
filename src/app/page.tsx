import { redirect } from "next/navigation";

export default function Page() {
    redirect(navigator.language?.includes('en') ? 'en' : 'pt');
}