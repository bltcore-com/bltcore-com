import blank from "./0-notinuse.yaml"
import comms from "./1-comms.yaml"
import boot from "./1-boot.yaml"
import services from "./2-services.yaml"
import genai from "./3-genai.yaml"
import aiqsol from "./4-aiqsol.yaml"
import analysis from "./5-analysis.yaml"
import fintech from "./9-fintech.yaml"
import banking from "./10-banking.yaml"
import house from "./11-house.yaml"
import cloud from "./12-cloud.yaml"
import stream from "./14-stream.yaml"
import project from "./15-project.yaml"


export default function pdata(ls) {
   let sdata = {}
   if (!ls.gs) {
      sdata.p1 = boot
      sdata.p2 = services
      sdata.p3 = genai
      sdata.p4 = aiqsol
      sdata.p5 = analysis
      sdata.p6 = blank
      sdata.p7 = blank
      sdata.p = project
   } else {
      // alternate
      switch (ls.gd) {

         case "personal":
            sdata.p1 = comms
            sdata.p2 = fintech
            sdata.p3 = banking
            sdata.p4 = house
            sdata.p5 = genai
            sdata.p6 = cloud
            sdata.p7 = services
            sdata.p8 = stream
            break

         default:
            sdata.p1 = boot
            sdata.p2 = services
            sdata.p3 = genai
            sdata.p4 = aiqsol
            sdata.p5 = analysis
            sdata.p6 = blank
            sdata.p7 = blank
            sdata.p8 = blank

      }
   }
   return sdata
}
