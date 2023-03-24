import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";

const searchCheckLookup: IconLookup = {
  prefix: "fas",
  iconName: "magnifying-glass",
};

const search: IconDefinition = findIconDefinition(searchCheckLookup);

export { search };
