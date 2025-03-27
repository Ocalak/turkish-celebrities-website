import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // In a production environment, this would fetch from a database
    // For development, we're reading from our JSON file
    const dataPath = path.join(process.cwd(), '..', '..', 'celebrity_data.json');
    
    // For development fallback if the file isn't found at the expected path
    let celebrityData;
    try {
      const fileContents = fs.readFileSync(dataPath, 'utf8');
      celebrityData = JSON.parse(fileContents);
    } catch (error) {
      // Fallback to hardcoded data if file can't be read
      celebrityData = {
        "celebrities": [
          {
            "name": "Ajda Pekkan",
            "profession": "Singer",
            "platform": "Twitter",
            "supportType": "Public endorsement",
            "description": "A famous Turkish singer who has publicly supported Erdogan's government policies.",
            "imageUrl": "https://example.com/ajda_pekkan.jpg"
          },
          {
            "name": "Hülya Avşar",
            "profession": "Actress",
            "platform": "Instagram",
            "supportType": "Campaign appearance",
            "description": "Popular actress who has appeared at Erdogan's campaign events and expressed support for government initiatives.",
            "imageUrl": "https://example.com/hulya_avsar.jpg"
          },
          {
            "name": "Burak Özçivit",
            "profession": "Actor",
            "platform": "Instagram",
            "supportType": "Social media support",
            "description": "Famous Turkish actor known for his roles in popular TV series who has shown support for government policies on social media.",
            "imageUrl": "https://example.com/burak_ozcivit.jpg"
          },
          {
            "name": "Acun Ilıcalı",
            "profession": "TV Producer",
            "platform": "Twitter",
            "supportType": "Public statements",
            "description": "Influential media mogul and TV producer who has made supportive statements about the government.",
            "imageUrl": "https://example.com/acun_ilicali.jpg"
          },
          {
            "name": "Hadise",
            "profession": "Singer",
            "platform": "Instagram",
            "supportType": "Event attendance",
            "description": "Popular singer who has attended government-sponsored events and shown support for official policies.",
            "imageUrl": "https://example.com/hadise.jpg"
          }
        ]
      };
    }

    return NextResponse.json(celebrityData);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch celebrity data' },
      { status: 500 }
    );
  }
}
