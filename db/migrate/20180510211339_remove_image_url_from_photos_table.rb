class RemoveImageUrlFromPhotosTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :photos, :image_url

  end
end
