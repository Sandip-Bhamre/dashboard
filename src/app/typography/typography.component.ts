import { Component, OnInit  } from '@angular/core';
import { DomSanitizer, SafeUrl , SafeResourceUrl  } from '@angular/platform-browser';
// import { Component, DomSanitizer, SafeUrl } from '@angular/core';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent  {
   youtubeVideoUrls = [
   { url: 'https://www.youtube.com/watch?v=tThJdNt-_5I&list=RDtThJdNt-_5I&start_radio=1', description: 'Laal Peeli Akhiyan'},
   { url :'https://www.youtube.com/watch?v=GvXDq-P1NB8&list=RDtThJdNt-_5I&index=2', description : 'Akhiyaan Gulaab'},
   { url :'https://www.youtube.com/watch?v=Vhm4mTh_UvU&list=RDtThJdNt-_5I&index=6', description : 'Sajda Karaan'},
   { url :'https://www.youtube.com/watch?v=Ja168gMpb3o&list=RDtThJdNt-_5I&index=5', description : 'Why this Kolaveri Di'},
   { url :'https://www.youtube.com/watch?v=RIz96zpbeBI&list=RDtThJdNt-_5I&index=8', description : 'Haiwaan'},
  ]; 

  selectedVideo: SafeUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void { }

  getEmbeddedUrl(youtubeUrl: string): SafeResourceUrl {
    const videoId = this.getVideoId(youtubeUrl);
    const embeddedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embeddedUrl);
  }

  private getVideoId(youtubeUrl: string): string {
    const videoIdMatch = youtubeUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      const blobUrl = URL.createObjectURL(file);
      this.selectedVideo = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
    }
  }
}
