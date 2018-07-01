class Api::ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :github_url
  has_many :project_categories
end
