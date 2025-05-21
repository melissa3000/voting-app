class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @candidates = Candidate.take(10)
  end
  def new
  end
  def update
    user = User.find(vote_params[:id])
    if user.update_attribute(:voted, 1)
      # provide some UX success message
    else
      # add error handling
    end
  end

  private
  def vote_params
    params.require(:user).permit(:id, :voted, :email, :password_digest, :zipcode, :created_at, :updated_at)
  end
end
