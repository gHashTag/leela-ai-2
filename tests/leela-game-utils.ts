import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CommentAction,
  DiceRolled,
  PlayerCreated,
  PlayerUpdated,
  ReportAction,
  RollDiceError
} from "../generated/LeelaGame/LeelaGame"

export function createCommentActionEvent(
  commentId: BigInt,
  reportId: BigInt,
  actor: Address,
  content: string,
  timestamp: BigInt,
  action: i32
): CommentAction {
  let commentActionEvent = changetype<CommentAction>(newMockEvent())

  commentActionEvent.parameters = new Array()

  commentActionEvent.parameters.push(
    new ethereum.EventParam(
      "commentId",
      ethereum.Value.fromUnsignedBigInt(commentId)
    )
  )
  commentActionEvent.parameters.push(
    new ethereum.EventParam(
      "reportId",
      ethereum.Value.fromUnsignedBigInt(reportId)
    )
  )
  commentActionEvent.parameters.push(
    new ethereum.EventParam("actor", ethereum.Value.fromAddress(actor))
  )
  commentActionEvent.parameters.push(
    new ethereum.EventParam("content", ethereum.Value.fromString(content))
  )
  commentActionEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  commentActionEvent.parameters.push(
    new ethereum.EventParam(
      "action",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(action))
    )
  )

  return commentActionEvent
}

export function createDiceRolledEvent(
  roller: Address,
  rolled: i32,
  currentPlan: BigInt
): DiceRolled {
  let diceRolledEvent = changetype<DiceRolled>(newMockEvent())

  diceRolledEvent.parameters = new Array()

  diceRolledEvent.parameters.push(
    new ethereum.EventParam("roller", ethereum.Value.fromAddress(roller))
  )
  diceRolledEvent.parameters.push(
    new ethereum.EventParam(
      "rolled",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(rolled))
    )
  )
  diceRolledEvent.parameters.push(
    new ethereum.EventParam(
      "currentPlan",
      ethereum.Value.fromUnsignedBigInt(currentPlan)
    )
  )

  return diceRolledEvent
}

export function createPlayerCreatedEvent(
  player: Address,
  fullName: string,
  avatar: string,
  intention: string
): PlayerCreated {
  let playerCreatedEvent = changetype<PlayerCreated>(newMockEvent())

  playerCreatedEvent.parameters = new Array()

  playerCreatedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  playerCreatedEvent.parameters.push(
    new ethereum.EventParam("fullName", ethereum.Value.fromString(fullName))
  )
  playerCreatedEvent.parameters.push(
    new ethereum.EventParam("avatar", ethereum.Value.fromString(avatar))
  )
  playerCreatedEvent.parameters.push(
    new ethereum.EventParam("intention", ethereum.Value.fromString(intention))
  )

  return playerCreatedEvent
}

export function createPlayerUpdatedEvent(
  player: Address,
  fullName: string,
  avatar: string,
  intention: string
): PlayerUpdated {
  let playerUpdatedEvent = changetype<PlayerUpdated>(newMockEvent())

  playerUpdatedEvent.parameters = new Array()

  playerUpdatedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  playerUpdatedEvent.parameters.push(
    new ethereum.EventParam("fullName", ethereum.Value.fromString(fullName))
  )
  playerUpdatedEvent.parameters.push(
    new ethereum.EventParam("avatar", ethereum.Value.fromString(avatar))
  )
  playerUpdatedEvent.parameters.push(
    new ethereum.EventParam("intention", ethereum.Value.fromString(intention))
  )

  return playerUpdatedEvent
}

export function createReportActionEvent(
  reportId: BigInt,
  actor: Address,
  content: string,
  plan: BigInt,
  timestamp: BigInt,
  action: i32
): ReportAction {
  let reportActionEvent = changetype<ReportAction>(newMockEvent())

  reportActionEvent.parameters = new Array()

  reportActionEvent.parameters.push(
    new ethereum.EventParam(
      "reportId",
      ethereum.Value.fromUnsignedBigInt(reportId)
    )
  )
  reportActionEvent.parameters.push(
    new ethereum.EventParam("actor", ethereum.Value.fromAddress(actor))
  )
  reportActionEvent.parameters.push(
    new ethereum.EventParam("content", ethereum.Value.fromString(content))
  )
  reportActionEvent.parameters.push(
    new ethereum.EventParam("plan", ethereum.Value.fromUnsignedBigInt(plan))
  )
  reportActionEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  reportActionEvent.parameters.push(
    new ethereum.EventParam(
      "action",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(action))
    )
  )

  return reportActionEvent
}

export function createRollDiceErrorEvent(message: string): RollDiceError {
  let rollDiceErrorEvent = changetype<RollDiceError>(newMockEvent())

  rollDiceErrorEvent.parameters = new Array()

  rollDiceErrorEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return rollDiceErrorEvent
}
