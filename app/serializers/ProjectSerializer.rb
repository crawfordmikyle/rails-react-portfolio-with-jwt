class ProjectSerializer < ActiveModel::Serializer
  attributes :title, :description
  has_many :project_categories
end