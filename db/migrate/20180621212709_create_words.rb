class CreateWords < ActiveRecord::Migration[5.2]
  def change
    create_table :words do |t|
      t.string :title
      t.integer :user_id
      t.integer :points

      t.timestamps
    end
  end
end
