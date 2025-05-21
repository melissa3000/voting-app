class SessionsController < ApplicationController
  def new
  end
  def create
    user = User.find_by(email: params[:email].downcase)
    if user
      puts "user found"
      reset_session
      log_in user
      redirect_to user 
      # Log the user in and redirect to the user's show page.
    else
      # Need to create an error message or some kind of error handling.
    render "new", status: :unprocessable_entity
    end
  end

  def destroy
  end

  private
  def session_params
    params.require(:email).permit(:password, :zipcode)
  end
end
