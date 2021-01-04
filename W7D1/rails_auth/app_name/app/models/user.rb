class User < ApplicationRecord
  validates :username, presence: true
  validates :session_token, presence: true
  validates_presence_of :password_digest, message: "Password can't be blank"

end
