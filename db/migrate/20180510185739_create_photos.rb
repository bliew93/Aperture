class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.string :image_url, null: false, unique: true
      t.string :title, null: false
      t.text :body
      t.timestamps
    end

    add_index :photos, :user_id
    add_index :photos, :image_url, unique: true
  end
end
