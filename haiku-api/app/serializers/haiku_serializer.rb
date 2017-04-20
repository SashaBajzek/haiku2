class HaikuSerializer < ActiveModel::Serializer
	attributes :id, :haikuLine1, :haikuLine2, :haikuLine3, :haikuTheme
end