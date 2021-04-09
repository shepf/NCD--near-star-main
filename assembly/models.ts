import { PersistentSet, PersistentVector, PersistentMap, u128 } from "near-sdk-as";
import { storage, logging } from "near-sdk-as";
import { AccountId, Balance, Duration } from './types'
import { context } from "near-sdk-as";


//操作类型
export enum StarKind {
    IncrementStar,
    ResetStar
}


@nearBindgen
export class NearStar {
    target: AccountId;
    description: string;
    kind: StarKind;
    payout: Balance;
    stars: PersistentMap<AccountId, u64>;


    constructor(
        target: AccountId,
        description: string,
        kind: StarKind,
        payout: Balance,
        stars: PersistentMap<AccountId, u64>
    ) {
        target = this.target;
        description = this.description;
        kind = this.kind;
        payout = this.payout;
        stars = this.stars;
    }

    get_amount(): Balance {
        return this.payout
    }
  
}


@nearBindgen
export class StarInput {
    target: AccountId;
    description: string;
    kind: StarKind;

    constructor(
        target: AccountId,
        description: string,
        kind: StarKind
    ) {
        target = this.target;
        description = this.description;
        kind = this.kind;
    }
}

//目标
// 对某个人点赞
//TODO 也许 我们可以对某个留言点赞

/** 
 * Exporting a new class PostedMessage so it can be used outside of this file.
 */
 @nearBindgen
 export class PostedMessage {
   premium: boolean;
   sender: string;
   constructor(public text: string) {
     this.premium = context.attachedDeposit >= u128.from('10000000000000000000000');
     this.sender = context.sender;
     
   }
 }


/**
 * collections.vector is a persistent collection. Any changes to it will
 * be automatically saved in the storage.
 * The parameter to the constructor needs to be unique across a single contract.
 * It will be used as a prefix to all keys required to store data in the storage.
 */
export const messages = new PersistentVector<PostedMessage>("m");
