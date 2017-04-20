class CreateHaikus < ActiveRecord::Migration[5.0]
  def change
    create_table :haikus do |t|
      t.string :haikuLine1
      t.string :haikuLine2
      t.string :haikuLine3
      t.string :haikuTheme

      t.timestamps
    end
  end
end
