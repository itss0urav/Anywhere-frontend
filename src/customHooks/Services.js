import { VoteService } from "../services/voteServices"

export const useVoteService = () => {
    return new VoteService()
}