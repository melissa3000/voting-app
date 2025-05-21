class CandidatesController < ApplicationController
  # this is not an elegant solution but works for our initial case
  def results
    @candidates = Candidate.take(10)
  end
  def create
    puts "creating new candidate"
    Candidate.create(name: params[:name], votes: 1)
  end

  private
  def candidate_params
    params.require(:name).permit(:votes)
  end
end
