import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  youtubeVideoUrls = [
    { url: 'tThJdNt-_5I', description: 'Laal Peeli Akhiyan' },
    { url: 'GvXDq-P1NB8', description: 'Akhiyaan Gulaab' },
    { url: 'Vhm4mTh_UvU', description: 'Sajda Karaan' },
    { url: 'Ja168gMpb3o', description: 'Why this Kolaveri Di' },
    { url: 'RIz96zpbeBI', description: 'Haiwaan' },
  ];

  selectedVideo: SafeUrl | null = null;

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      const blobUrl = URL.createObjectURL(file);
      this.selectedVideo = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
    }
  }

  // openVideoModal(videoId: string): void {
  //   const dialogRef = this.dialog.open('', {
  //     width: '80%',
  //     data: videoId,
  //   });
  // }
}
