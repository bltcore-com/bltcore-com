# Summary Table of the Payment Ecosystem Flow


| Step | Description                                                                       | Parties Involved          |
| ---- | --------------------------------------------------------------------------------- | ------------------------- |
| 1    | Customer initiates a transaction using a card or digital wallet.                  | Customer                  |
| 2    | Business collects payment via POS terminal or online checkout.                    | Business                  |
| 3    | Payment gateway securely transmits payment details to the processor (for online). | Payment Gateway           |
| 4    | Payment processor forwards details to the network and screens for fraud.          | Payment Processor         |
| 5    | Payment network sends details to the issuing bank.                                | Payment Network           |
| 6    | Issuing bank checks balance, approves/declines.                                   | Issuing Bank              |
| 7    | Network returns authorization to processor.                                       | Payment Network           |
| 8    | Processor shares response with business to complete the transaction.              | Payment Processor         |
| 9    | Business sends approved transactions to processor for settlement.                 | Business                  |
| 10   | Processor settles funds.                                                          | Payment Processor         |
| 11   | Issuing bank transfers funds to acquiring bank.                                   | Issuing & Acquiring Banks |
| 12   | Funds are deposited into the business's account.                                  | Business                  |

Yes, you can create a sequence diagram of the payment ecosystem flow using [draw.io](https://draw.io) (also known as diagrams.net). Below is a simple XML snippet you can import directly into draw.io to visualize the flow described in the table above.

**How to use:**
1. Copy the XML code below.
2. Go to [draw.io](https://draw.io).
3. Click **File > Import From > Device** and paste the code into a `.drawio` or `.xml` file, or use **Arrange > Insert > Advanced > XML...** and paste it directly.

```xml
<mxfile host="app.diagrams.net" modified="2024-01-01T00:00:00.000Z" agent="5.0" etag="payment-ecosystem-flow" version="22.1.16" type="device">
  <diagram name="Payment Ecosystem Flow" id="payment-flow">
    <mxGraphModel dx="1422" dy="794" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        
        <!-- Actors -->
        <mxCell id="customer" value="Customer" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="1">
          <mxGeometry x="40" y="80" width="30" height="60" as="geometry" />
        </mxCell>
        
        <mxCell id="business" value="Business" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;fillColor=#d5e8d4;strokeColor=#82b366;" vertex="1" parent="1">
          <mxGeometry x="160" y="80" width="30" height="60" as="geometry" />
        </mxCell>
        
        <mxCell id="gateway" value="Payment Gateway" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;fillColor=#fff2cc;strokeColor=#d6b656;" vertex="1" parent="1">
          <mxGeometry x="280" y="80" width="30" height="60" as="geometry" />
        </mxCell>
        
        <mxCell id="processor" value="Payment Processor" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;fillColor=#e1d5e7;strokeColor=#9673a6;" vertex="1" parent="1">
          <mxGeometry x="400" y="80" width="30" height="60" as="geometry" />
        </mxCell>
        
        <mxCell id="network" value="Payment Network" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
          <mxGeometry x="520" y="80" width="30" height="60" as="geometry" />
        </mxCell>
        
        <mxCell id="issuing" value="Issuing Bank" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;fillColor=#ffe6cc;strokeColor=#d79b00;" vertex="1" parent="1">
          <mxGeometry x="640" y="80" width="30" height="60" as="geometry" />
        </mxCell>
        
        <mxCell id="acquiring" value="Acquiring Bank" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;fillColor=#f5f5f5;strokeColor=#666666;" vertex="1" parent="1">
          <mxGeometry x="760" y="80" width="30" height="60" as="geometry" />
        </mxCell>
        
        <!-- Lifelines -->
        <mxCell id="customer-line" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle=elbowEdgeStyle;elbow=vertical;endArrow=block;endFill=1;endSize=12;strokeWidth=2;}&quot;;" vertex="1" parent="1">
          <mxGeometry x="55" y="160" width="0" height="600" as="geometry" />
        </mxCell>
        
        <mxCell id="business-line" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle=elbowEdgeStyle;elbow=vertical;endArrow=block;endFill=1;endSize=12;strokeWidth=2;}&quot;;" vertex="1" parent="1">
          <mxGeometry x="175" y="160" width="0" height="600" as="geometry" />
        </mxCell>
        
        <mxCell id="gateway-line" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle=elbowEdgeStyle;elbow=vertical;endArrow=block;endFill=1;endSize=12;strokeWidth=2;}&quot;;" vertex="1" parent="1">
          <mxGeometry x="295" y="160" width="0" height="600" as="geometry" />
        </mxCell>
        
        <mxCell id="processor-line" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle=elbowEdgeStyle;elbow=vertical;endArrow=block;endFill=1;endSize=12;strokeWidth=2;}&quot;;" vertex="1" parent="1">
          <mxGeometry x="415" y="160" width="0" height="600" as="geometry" />
        </mxCell>
        
        <mxCell id="network-line" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle=elbowEdgeStyle;elbow=vertical;endArrow=block;endFill=1;endSize=12;strokeWidth=2;}&quot;;" vertex="1" parent="1">
          <mxGeometry x="535" y="160" width="0" height="600" as="geometry" />
        </mxCell>
        
        <mxCell id="issuing-line" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle=elbowEdgeStyle;elbow=vertical;endArrow=block;endFill=1;endSize=12;strokeWidth=2;}&quot;;" vertex="1" parent="1">
          <mxGeometry x="655" y="160" width="0" height="600" as="geometry" />
        </mxCell>
        
        <mxCell id="acquiring-line" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle=elbowEdgeStyle;elbow=vertical;endArrow=block;endFill=1;endSize=12;strokeWidth=2;}&quot;;" vertex="1" parent="1">
          <mxGeometry x="775" y="160" width="0" height="600" as="geometry" />
        </mxCell>
        
        <!-- Messages -->
        <!-- Step 1: Customer to Business -->
        <mxCell id="step1" value="1. Initiate transaction" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="customer-line" target="business-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="55" y="200" as="sourcePoint" />
            <mxPoint x="175" y="200" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 2: Business to Gateway (for online) -->
        <mxCell id="step2" value="2. Payment details" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="business-line" target="gateway-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="175" y="240" as="sourcePoint" />
            <mxPoint x="295" y="240" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 3: Gateway to Processor -->
        <mxCell id="step3" value="3. Transmit securely" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="gateway-line" target="processor-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="295" y="280" as="sourcePoint" />
            <mxPoint x="415" y="280" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 4: Processor to Network -->
        <mxCell id="step4" value="4. Forward &amp; screen fraud" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="processor-line" target="network-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="415" y="320" as="sourcePoint" />
            <mxPoint x="535" y="320" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 5: Network to Issuing Bank -->
        <mxCell id="step5" value="5. Send details" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="network-line" target="issuing-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="535" y="360" as="sourcePoint" />
            <mxPoint x="655" y="360" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 6: Issuing Bank response -->
        <mxCell id="step6" value="6. Check balance &amp; approve/decline" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="issuing-line" target="network-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="655" y="400" as="sourcePoint" />
            <mxPoint x="535" y="400" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 7: Network to Processor -->
        <mxCell id="step7" value="7. Return authorization" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="network-line" target="processor-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="535" y="440" as="sourcePoint" />
            <mxPoint x="415" y="440" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 8: Processor to Business -->
        <mxCell id="step8" value="8. Share response" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="processor-line" target="business-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="415" y="480" as="sourcePoint" />
            <mxPoint x="175" y="480" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 9: Business to Processor (settlement) -->
        <mxCell id="step9" value="9. Send for settlement" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="business-line" target="processor-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="175" y="520" as="sourcePoint" />
            <mxPoint x="415" y="520" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 10: Processor settles -->
        <mxCell id="step10" value="10. Settle funds" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="processor-line" target="acquiring-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="415" y="560" as="sourcePoint" />
            <mxPoint x="775" y="560" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 11: Issuing to Acquiring -->
        <mxCell id="step11" value="11. Transfer funds" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="issuing-line" target="acquiring-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="655" y="600" as="sourcePoint" />
            <mxPoint x="775" y="600" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Step 12: Acquiring to Business -->
        <mxCell id="step12" value="12. Deposit funds" style="html=1;verticalAlign=bottom;endArrow=open;endSize=12;strokeWidth=2;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="acquiring-line" target="business-line">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="775" y="640" as="sourcePoint" />
            <mxPoint x="175" y="640" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Title -->
        <mxCell id="title" value="Payment Ecosystem Flow Sequence Diagram" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;" vertex="1" parent="1">
          <mxGeometry x="400" y="20" width="300" height="30" as="geometry" />
        </mxCell>
        
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```

This XML creates a comprehensive sequence diagram showing all 12 steps of the payment ecosystem flow, with:

- **Actors**: Customer, Business, Payment Gateway, Payment Processor, Payment Network, Issuing Bank, and Acquiring Bank
- **Messages**: Each step from the table is represented as a message between the appropriate parties
- **Visual Design**: Color-coded actors and clear message flow
- **Timeline**: Messages are arranged chronologically from top to bottom

To use this diagram:
1. Copy the entire XML code above
2. Go to [draw.io](https://draw.io)
3. Click **File > Import From > Device** and paste the code into a `.drawio` or `.xml` file, or use **Arrange > Insert > Advanced > XML...** and paste it directly
4. The diagram will show the complete payment flow with all parties and their interactions
