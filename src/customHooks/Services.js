import { PostServices } from "../services/postServices"
import { VoteService } from "../services/voteServices"

export const useVoteService = () => {
    return new VoteService()
}

export const usePostServices = () => new PostServices()