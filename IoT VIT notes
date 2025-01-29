
# Cat 1

# Module 1

## Challenges of IoT
1. Lack of standardization (Open interconnect consortium, Industrial internet consortium)
2. adressing issue(scalability)
3. Unknown network traffic flow. Smart object traffic, wireless sensor networkd
4. Security (complex security cannot be implemented--low energy ; Authentication problem)
5. Energy issues

## Physical Design of IoT
1. Generic Block of IoT
2. Layers and Protocols

#### IEEE 802.15.4 LR-WPAN
1. IEEE 802.15.4 is a collection of standards for low-rate wireless personal area networks (LR-WPANs)
2. These standards from the basis of specifications for high level communication protocols such as Zigbee
3. LR-WPAN standards provide data rates from 40 Kb/s to 250 Kb/s
4. These standards provide low-cost and low-speed communication for power constrained devices
5. These specifications of the 802.15.4 standards are available on the IEEE802.15 working group website

#### Transport layer(TCP, UDP)

## Logical Design of IoT

	#### 1. Functional Blocks of IoT
	- Devices, Communication, services, management, security, application
	#### 2. IoT Communication Model
	#### 3. IoT Communication API

---
# Module 2

### Zigbee 
- ZigBee is a technological standard designed for control and sensor networks
- Based on the IEEE 802.15.4 Standard. Created by the ZigBee Alliance
- 868Mhz, 915Mhz, 2.4GHz
- Uses first 2 layers + LLC


		IEEE 802.15.4 is a technical standard that defines the operation of a low-rate wireless personal area network (LR-WPAN).
		ZigBee (Zonal Intercommunication Global-standard)is a protocol that uses the 802.15. 4 standard as a baseline and adds additional routing and networking functionality.

**Advantages:**
1. Standards based
2. Low cost
3. Can be used globally
4. Reliable and self healing
5. Supports large number of nodes
6. Easy to deploy
7. Very long battery life
8. Secure

- DSSS
- Tolerant to noise and interference. CSMA/CA
- **FFD, RFD, Topologies**
#### Security in zigbee
	1.  Data confidentiality
	2. Modify and send one of the previous messages
Security services provided by ZigBee: “key establishment, key transport, frame protection, and device management.
For different security aspects the MAC layer uses different mode of the AES
#### Network Formation:
	1. Self Forming
	2. Self healing
## Bluetooth

#### Transport protocol group

##### Logical Link control and abstraction protocol
1. Protocol multiplexing capability
2. Segmentation and reassembly operation
3. Group abstractions

#### Middleware protocol Group
- RFCOMM
- SDP - service discovery protocol
- OBEX - Object exchange protocol -- session protocol developed by Infrared Data association
- 
### Bluetooth Link types 
1. Synchronous connection oriented (SCO) - symmetric and transmitted in specific interval.Max 64Kbps
2. Asynchronous connectionless (ACL)
## WiFi - wireless fidility

- Radio signals, Access points
- 802.11 family
- wifi uses media access control protocol CSMA CA
- Distributed control function - CSMA (Inter frame gap keyword)
- Coordination function in 802.11 MAC sublayer
	- Distributed Coordination fun
	- Point Coordination fun

### GPS
- User segment, control segment, space segment
## Application layer protocols

### MQTT - message queuing telemetry transport
- broker client model
- topics and their format
- qos
- Message format of mqtt : fixed header 2 bytes, <=256MB
### CoAP
- UDP
- constrained applications
- CoAP message have uniqueID
- Features
	1. Web protocol M2M data exchange
	2. Proxy
	3. Async message exchange
	4. Low overhead
- 4 message types 

### 6LoPAN 
- uses AES 128bit
- can communicate with Zigbee devices(IEEE 802.15.4)
- Advantages of 6LOWPAN
	1. 6LOWPAN is a Mesh Network that is robust, scalable, and self-healing.
	2. 6LOWPAN delivers low-cost, and secure communication in loT devices.
	3. 6LOWPAN uses IPV6 protocol, so data can be routed directly to the cloud.
- Provides a means of carrying packet data in the form of IPv6 over IEEE 802.15.4 and other networks.
- Issues - mismatch between IP package size and the IEEE 802.15.4 package size. **SO CREATE SUBLAYER**
- use Edge router and generate radio subnets. 
- sleep mode for increasing battery life
- 16KB RAM and 128KB ROM

### IPv6
IEEE 802.15.4 uses two addresses: a 16-bit short address   and an EUI-64 extended address (Extended Unique Identifier).

### Routing

Two categories of routing

1. Mesh Under
	1. smaller and local networks
	2. only IP router is edge router
	3. 2 layers are used
2. Router over
	1. 3 layers
	2. RPL is the router-over protocol used in 6LoWPAN
	3. uses RPL (Routing protocol for Low power and Lossy networks)

#### RPL
- Mainly used with IPv6 but can be implemented with IPv4 also
- based on Distance vector routing, it is based on DODAG
- Terminologies
	- Objective function in DODAG
	- IPv6 ID assigned to root of DODAG
	- Floating and Grounded root nodes based on reached goal?
