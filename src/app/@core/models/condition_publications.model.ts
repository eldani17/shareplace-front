import { Publication } from "./publications.model";
import { Conditions } from "./conditions.model";

export class ConditionPublications {
  id:number;
  publication: Publication;
  condition: Conditions;
}