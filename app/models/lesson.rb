# == Schema Information
#
# Table name: lessons
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  title         :string           not null
#  subject       :string
#  grade         :integer
#  lesson_date   :date
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  image_url     :string
#  thumbnail_url :string
#

class Lesson < ActiveRecord::Base
  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :objectives
  has_many :key_points
  has_many :sections
  has_many :misconceptions, through: :sections
  has_many :cfus, through: :sections
end
