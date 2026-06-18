import {
  aboutPageContent,
  homeEditorialContent,
  suggestTrailPageContent,
} from "@/content/static/marketing";

export async function getAboutPageContent() {
  return aboutPageContent;
}

export async function getSuggestTrailPageContent() {
  return suggestTrailPageContent;
}

export async function getHomeEditorialContent() {
  return homeEditorialContent;
}
