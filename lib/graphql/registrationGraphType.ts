import { Field, ObjectType } from "type-graphql";
import RegistrationState from "../../lib/RegistrationState";

const nonnull = { nullable: false };

@ObjectType({ isAbstract: true })
export class RegistrationGraphType implements RegistrationState {
  @Field(() => [String], nonnull)
  selectedPlan!: string[];

  @Field(() => Boolean, nonnull) broadbandVideo!: boolean;
  @Field(() => String, nonnull) installDate!: string;
  @Field(() => String, nonnull) imei!: string;
  @Field(() => String, nonnull) ownerFname!: string;
  @Field(() => String, nonnull) ownerLname!: string;
  @Field(() => String, nonnull) ownerMi!: string;
  @Field(() => String, nonnull) vesselName!: string;
  @Field(() => String, nonnull) cellNumber!: string;
  @Field(() => String, nonnull) vesselType!: string;
  @Field(() => String, nonnull) dealerName!: string;
  @Field(() => String, nonnull) dealerCompany!: string;
  @Field(() => Boolean, nonnull) showImeiModal!: boolean;
  @Field(() => Boolean, nonnull) agreed!: boolean;
  @Field(() => String, nonnull) iccId!: string;
}
