class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true
  validates :session_token, presence: true
  validates_presence_of :password_digest, message: "Password can't be blank"
  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!

  end

  def ensure_session_token

  end

  def password=

  end
end
