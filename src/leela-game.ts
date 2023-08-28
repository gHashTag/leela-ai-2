import {
  CommentAction as CommentActionEvent,
  DiceRolled as DiceRolledEvent,
  PlayerCreated as PlayerCreatedEvent,
  PlayerUpdated as PlayerUpdatedEvent,
  ReportAction as ReportActionEvent,
  RollDiceError as RollDiceErrorEvent
} from "../generated/LeelaGame/LeelaGame"
import {
  CommentAction,
  DiceRolled,
  PlayerCreated,
  PlayerUpdated,
  ReportAction,
  RollDiceError
} from "../generated/schema"

export function handleCommentAction(event: CommentActionEvent): void {
  let entity = new CommentAction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.commentId = event.params.commentId
  entity.reportId = event.params.reportId
  entity.actor = event.params.actor
  entity.content = event.params.content
  entity.timestamp = event.params.timestamp
  entity.action = event.params.action

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDiceRolled(event: DiceRolledEvent): void {
  let entity = new DiceRolled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roller = event.params.roller
  entity.rolled = event.params.rolled
  entity.currentPlan = event.params.currentPlan

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePlayerCreated(event: PlayerCreatedEvent): void {
  let entity = new PlayerCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.player = event.params.player
  entity.fullName = event.params.fullName
  entity.avatar = event.params.avatar
  entity.intention = event.params.intention

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePlayerUpdated(event: PlayerUpdatedEvent): void {
  let entity = new PlayerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.player = event.params.player
  entity.fullName = event.params.fullName
  entity.avatar = event.params.avatar
  entity.intention = event.params.intention

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReportAction(event: ReportActionEvent): void {
  let entity = new ReportAction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reportId = event.params.reportId
  entity.actor = event.params.actor
  entity.content = event.params.content
  entity.plan = event.params.plan
  entity.timestamp = event.params.timestamp
  entity.action = event.params.action

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRollDiceError(event: RollDiceErrorEvent): void {
  let entity = new RollDiceError(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.message = event.params.message

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
