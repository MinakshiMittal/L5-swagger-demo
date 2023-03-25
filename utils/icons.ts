import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const searchCheckLookup: IconLookup = {
  prefix: "fas",
  iconName: "magnifying-glass",
};
const angleLeftLookup: IconLookup = { prefix: "fas", iconName: "angle-left" };
const angleRightLookup: IconLookup = { prefix: "fas", iconName: "angle-right" };

const search: IconDefinition = findIconDefinition(searchCheckLookup);
const angleLeft: IconDefinition = findIconDefinition(angleLeftLookup);
const angleRight: IconDefinition = findIconDefinition(angleRightLookup);

export { search, angleLeft, angleRight };
