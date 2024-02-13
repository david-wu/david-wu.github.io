import { Injectable } from '@angular/core';

import { User } from '@models/index';
import { UploadFile } from '@photo-gallery/models/index';
import { FirebaseFirestoreService } from './firebase-firestore.service';
import { FirebaseStorageService } from './firebase-storage.service';
import { UserLocationService } from '@src/app/photo-gallery/services/user-location.service';

@Injectable()
export class CamAppService {

  constructor(
    public storage: FirebaseStorageService,
    public store: FirebaseFirestoreService,
  ) {}

  /**
   * uploadFile
   * @param {File} file
   * @param {User} user
   */
  public async uploadFile(file: File, user: User, imageStreamId: string, imageClassifierId: string) {
    const uploadDoc = {
      userId: user.uid,
      fileName: file.name || 'missingFileName',
      isUploaded: false,
      imageStreamId,
      imageClassifierId,
    } as UploadFile;
    const insertedUploadDocRef = await this.store.insertUploadDoc(uploadDoc, 'ppUploads');
    const insertedUploadDoc = {
      ...uploadDoc,
      id: insertedUploadDocRef.id,
    };

    // const sizedFile = await this.imageProcessing.processImageFile(file, exifData);
    const fileUploadResponse = await this.storage.uploadFile(file, insertedUploadDoc.id, 'ppUploads');
    const downloadUrl = await fileUploadResponse.ref.getDownloadURL();
    const uploadMeta = { downloadUrl };
    await this.store.registerFileUploaded(insertedUploadDoc.id, uploadMeta, 'ppUploads');
  }

}
