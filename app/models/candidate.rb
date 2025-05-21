class Candidate < ApplicationRecord
  before_save { self.name = name.downcase }
  validates :name, presence: true, length: { maximum: 255 }, uniqueness: true
end
