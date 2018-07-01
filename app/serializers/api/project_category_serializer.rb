class Api::ProjectCategorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :category
end
