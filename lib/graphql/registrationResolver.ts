﻿import { Mutation, Query, Resolver } from "type-graphql";
import { defaultRegistrationState } from "../RegistrationState";
import { RegistrationGraphType } from "./registrationGraphType";

@Resolver(RegistrationGraphType)
export class RegistrationResolver {
  @Query((returns) => RegistrationGraphType, {
    name: "defaultRegistration",
  })
  defaultRegistration() {
    return defaultRegistrationState;
  }

  @Mutation((returns) => RegistrationGraphType, {
    name: "submitRegistration",
    description: "Creates the subscription and registers the subscriber.",
  })
  submitRegistration(
    submitRegistrationData: RegistrationGraphType
  ): RegistrationGraphType {
    // TODO: Create the Stripe customer and Subscription using the tokenized payment.
    return submitRegistrationData;
  }
}
