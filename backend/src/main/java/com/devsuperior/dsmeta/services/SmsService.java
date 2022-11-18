package com.devsuperior.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import com.devsuperior.dsmeta.utilities.FormatService;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	/**
	 * @Value("${twilio.sid}") vai puxar de application.properties a variável
	 * twilio.sid e jogar na variável local twilioSid
	 */
	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private SaleRepository saleRepository;

	@Autowired
	private FormatService formatService;

	public void sendSms(Long saleId) {

		Sale sale = saleRepository.findById(saleId).get();

		String date = formatService.completeToLeft(sale.getDate().getMonthValue(), '0', 2) + "/"
				+ sale.getDate().getYear();

		String textMessage = "O vendedor(a) " + sale.getSellerName() + " foi destaque em " + date
				+ " com um total de R$ " + String.format("%.2f", sale.getAmount());

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, textMessage).create();

		System.out.println(message.getSid());
	}

}