class User < ApplicationRecord
  validates :username, presence: true
  validates :session_token, presence: true
  validates_presence_of :password_digest, message: "Password can't be blank"
  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  
end
